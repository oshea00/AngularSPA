using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularSPA
{
    public class Event
    {
        public int id { get; set; }
        public string name { get; set; }
        public DateTime date { get; set; }
        public string time { get; set; }
        public double rating { get; set; }
        public string imageUrl { get; set; }
        public Location location { get; set; }
        public List<Session> sessions { get; set; }
    }

    public class Location
    {
        public string address { get; set; }
        public string city { get; set; }
        public string province { get; set; }
    }

    public class Session
    {
        public int id { get; set; }
        public string name { get; set; }
        public string creatorName { get; set; }
        public string duration { get; set; }
        public string level { get; set; }
        public string description { get; set; }
        public int upVoteCount { get; set; }
    }
}
