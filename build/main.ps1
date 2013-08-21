properties {
	$base_dir = resolve-path ..\

	#Things you will want to change
	$sharedAssemblyInfo = "$base_dir\AngularSPA\Properties\AssemblyInfo.cs"
	$sln_file = "$base_dir\AngularSPA.sln"
	$tests = @() 

    #Things that are mostly standard
	$msbuild = "C:\Windows\Microsoft.NET\Framework\v4.0.30319\MSBuild.exe"
        $version = if($env:BUILD_NUMBER) { $env:BUILD_NUMBER } else { "99.99.99.994" }	
	$tool_dir = "$base_dir\packages"
	$build_dir = "$base_dir\ci"
	$build_output_dir = "$build_dir\Work"

	$testrpt_dir = "$build_dir\TestReports"
	$testrpt_name = "TestReport"
	$runner = "$tool_dir\Machine.Specifications.0.5.9\tools\mspec-x86-clr4.exe"

	$stage_dir = "$build_output_dir\stage"
	$package_dir = "$build_dir\package\"
	$docs_dir = "$base_dir\docs"
        $update_nuget = if($env:TEAMCITY_VERSION) { $true } else { $false }
        $nuget = "$base_dir\.nuget\NuGet.exe"		
}

task default -depends deploy

task recreate_build_dir {

	echo 'blow out the old cheese'

	if ((Test-Path $build_dir) -eq $true) {
		rm -r -force "$build_dir"
	}

	echo 'create the new build dir to make stuff'

	if ((Test-Path $build_dir) -ne $true) {
		new-item $build_dir -itemType directory | Out-Null
	}
}

task compile -depends recreate_build_dir {

	"Setting version number to $version in $commonAssemblyInfo"

	$content = Get-Content $sharedAssemblyInfo `
	| ForEach { [regex]::Replace($_, '(AssemblyVersion|AssemblyFileVersion)\(".*"\)', '$1("' + $version + '")') }

	Set-Content -Value $content -Path $sharedAssemblyInfo 

	exec { & $msbuild $sln_file /p:OutputPath="$build_output_dir\" /p:Configuration=Release }
}

task test -depends compile {

	if ($tests.Length -gt 0) { 
	   if (Test-Path $testrpt_dir) { Remove-Item -Recurse -Force $testrpt_dir }
	   New-Item $testrpt_dir -ItemType directory | Out-Null
	
	   $test_assemblies = $tests | ForEach-Object { "$build_output_dir\$_" }
	   exec { & $runner -x "integration" $test_assemblies }
	}
  
        pushd ..
        karma start --reporters teamcity --single-run
        popd
	Write-Host "Finished Running Tests"
}

task deploy -depends test {

    $nupkg = "$stage_service_dir\"+@(dir $stage_service_dir\*.nupkg)[0].Name

    if ($update_nuget) {
        $nupkg = "$stage_service_dir\"+@(dir $stage_service_dir\*.nupkg)[0].Name
        Exec { & $nuget push $nupkg 46b925a1-4e22-4266-83ed-8fb4c32bd38f -Source http://tac-app270/GADGet/api/V2/package }
    }

	if (Test-Path $package_dir) { Remove-Item -Recurse -Force $package_dir }
	New-Item $package_dir -ItemType directory | Out-Null

}
