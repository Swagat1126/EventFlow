const intents = [
  {
    keywords: ["register", "registration", "signup"],
    response: "You can register for an event by visiting the Events page and clicking the Register button."
  },
  {
    keywords: ["venue", "location", "where"],
    response: "Event venue details are available on the specific event page."
  },
  {
    keywords: ["coordinator", "organizer", "contact person"],
    response: "Each event has a coordinator listed on its event details page."
  },
  {
    keywords: ["feedback"],
    response: "You can submit feedback after the event ends through the Feedback section."
  },
  {
    keywords: ["certificate"],
    response: "Certificates will be available for download after successful event participation."
  },
  {
    keywords: ["volunteer"],
    response: "You can apply as a volunteer from the event volunteer section."
  },
  {
    keywords: ["login", "sign in"],
    response: "You can login using your registered email and password."
  },
  {
    keywords: ["dashboard"],
    response: "Dashboard shows your registered events, attendance status, and certificates."
  },
  {
    keywords: ["issue", "problem", "error"],
    response: "If you face any issue, please contact admin or use the support section."
  }
];

export default intents;