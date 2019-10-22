public class AddEditCalendar
{
        public String eventitle1;
        public String description1;
        public double date1;
        public String[3] calendar = ["Title", "Description", "Date"];
        public String createEvent(String eventitle2, String description2, double date2,)
        {
            eventitle1 = eventitle2;
            description1 = description2;
            date1 = date2;
            if(eventitle1 != null && description1 != null && date2 != null)
            {
                String dataString = date1;
                calendar.add(eventitle1, "Title");
                calendar.add(description1, "Desciption");
                calendar.add(dataString, "Date")
            }
        }
}