param($task='default')

.nuget\NuGet.exe install psake -version 4.2.0.1 -o .\packages
.nuget\NuGet.exe install Machine.Specifications -Version 0.5.9 -o .\packages


if(-not(Get-Module -name psake)) {	
	Import-Module .\packages\psake.4.2.0.1\tools\psake.psm1
}

$ERROR.Clear()

Invoke-psake .\build\main.ps1 $task

Write-Host "Error count: " $Error.count

function Show-ErrorDetails ($ErrorRecord)
{

    $ErrorRecord | Format-List * -Force
    $ErrorRecord.InvocationInfo | Format-List *
    $Exception = $ErrorRecord.Exception
    for ($depth = 0; $Exception -ne $null; $depth++)
    {
        "$depth" * 80
        $Exception | Format-List * -Force
        $Exception = $Exception.InnerException
    }
}


if ($Error.count -gt 0)
{
    Write-Host "Errors that occured during the build:"
    for ($i = 0; $i -le ($Error.count - 1); $i++)
    {
        Write-Host "Error # $i"
        Show-ErrorDetails $Error[$i]
        #Write-Host "    Error:" $Error[$i].Exception
    }
}

exit $Error.count;
