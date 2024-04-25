using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace TaskManager.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Content { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int StatusId { get; set; }
        public Status Status { get; set; }
        public int ActivityId { get; set; }
        public Activity Activity { get; set; }
        public List<Tag> Tags { get; set; }
    }
}
