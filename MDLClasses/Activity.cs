using System;
using System.Collections.Generic;

namespace TaskManager.Models
{
    public class Activity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int StatusId { get; set; }
        public Status Status { get; set; }
        public List<Tag> Tags { get; set; }
        public int ActivityTypeId { get; set; }
        public ActivityType ActivityType { get; set; }
    }
}
