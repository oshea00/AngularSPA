using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularSPA.Controllers
{
    public class EventController : ApiController
    {
        // GET api/event
        public IEnumerable<Event> Get()
        {
            var events = new List<Event> {
                new Event
                { id = 1, name = "Angular Boot Camp", date = DateTime.Now, time = "10:30 am", rating = 3.2, 
                    location = new Location { address = "Google Headquarters", city = "Mountain View", province = "CA", },
                    imageUrl = "/Content/images/russell_logo.gif",
                    sessions = new List<Session> {
                        new Session { 
                            id = 1,
                            name = "Directives Masterclass Beginner",
                            creatorName = "Mike O'Shea",
                            duration = "1 hour",
                            level = "advanced",
                            description = "This is a sample description for the session abstract",
                            upVoteCount = 10,
                        },
                        new Session {
                            id = 2,
                            name = "scopes for fun and profit",
                            level = "beginner",
                            upVoteCount = 0,
                        },
                        new Session {
                            id = 3,
                            name = "well-behaved Controllers",
                            level = "advanced",
                            upVoteCount = 0,
                        },
                    }
                },
                new Event
                { id = 2, name = "Angular Party", date = DateTime.Now, time = "11:30 am", rating = 0.0, 
                    location = new Location { address = "Google Headquarters", city = "Mountain View", province = "CA", },
                    imageUrl = "/Content/images/russell_logo.gif",
                    sessions = new List<Session> {
                        new Session {
                            id = 4,
                            name = "Partying for fun and profit",
                            level = "advanced",
                            upVoteCount = 0,
                        },
                    }
                },
            };

            return events;
        }

        // GET api/event/5
        public Event Get(int id)
        {
            var myevent = new Event
            {
                id = 1,
                name = "Angular Boot Camp",
                date = DateTime.Now,
                time = "10:30 am",
                rating = 3.2,
                location = new Location
                {
                    address = "Google Headquarters",
                    city = "Mountain View",
                    province = "CA",
                },
                imageUrl = "/Content/images/russell_logo.gif",
                sessions = new List<Session> {
                    new Session { 
                        id = 1,
                        name = "Directives Masterclass Beginner",
                        creatorName = "Mike O'Shea",
                        duration = "1 hour",
                        level = "advanced",
                        description = "This is a sample description for the session abstract",
                        upVoteCount = 10,
                    },
                    new Session {
                        id = 2,
                        name = "scopes for fun and profit",
                        level = "beginner",
                        upVoteCount = 0,
                    },
                    new Session {
                        id = 3,
                        name = "well-behaved Controllers",
                        level = "advanced",
                        upVoteCount = 0,
                    },
                }
            };

            return myevent;
        }

        // POST api/event
        public void Post(Event newevent)
        {
            // Add code to save event
        }

        // PUT api/event/5
        public void Put(int id, [FromBody]Event value)
        {
            // Add code to update event
        }

        // DELETE api/event/5
        public void Delete(int id)
        {
            // Add code to delete event
        }
    }
}
