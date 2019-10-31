export const EVENTS = {
  WORKSHOP_SESSION_01: "WORKSHOP_SESSION_01",
  WORKSHOP_SESSION_02: "WORKSHOP_SESSION_02",
  WORKSHOP_SESSION_03: "WORKSHOP_SESSION_03"
}

//  Must be in proper order
export const AGENDA = [
  {
    day: "Friday",
    time: "4:00 - 10:00pm",
    title: "Registration",
    location: "Asian American Cultural Center",
    description: "",
  },
  {
    day: "Friday",
    time: "7:00 - 9:00pm",
    title: "Opening Ceremonies",
    location: "Gregory Hall Auditorium",
    description: ""
  },
  {
    day: "Saturday",
    time: "8:30 - 9:30am",
    title: "Late Registration",
    location: "University YMCA",
    description: "",
  },
  {
    day: "Saturday",
    time: "9:00 - 9:40am",
    title: "Opening Session",
    location: "Lincoln Hall Session",
    description: "",
  },
  {
    day: "Saturday",
    time: "9:55 - 11:00am",
    title: "Workshop Session I",
    location: "Assigned Locations",
    description: "",
  },
  {
    day: "Saturday",
    time: "11:15am - 12:20pm",
    title: "Workshop Session II",
    location: "Assigned Locations",
    description: "",
  },
  {
    day: "Saturday",
    time: "12:20 - 1:30pm",
    title: "Lunch",
    description: "",
  },
  {
    day: "Saturday",
    time: "1:45 - 3:00pm",
    title: "Workshop Session III",
    location: "Assigned Locations",
    description: "",
  },
  {
    day: "Saturday",
    time: "3:15 - 4:15pm",
    title: "Meet the Facilitators & Wristband Pick-up",
    location: "Asian American Cultural Center",
    description: "",
  },
  {
    day: "Saturday",
    time: "5:00 - 7:00pm",
    title: "Variety Show",
    location: "Foellinger Auditorium",
    description: "",
  }
]

export function getFridayAgenda() { 
  return AGENDA.filter(event => event.day === 'Friday')
}

export function getSaturdayAgenda() { 
  return AGENDA.filter(event => event.day === 'Saturday')
}