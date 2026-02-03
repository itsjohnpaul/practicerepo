// -------- TYPES & INTERFACES --------

export interface UmrahFor {
  name: string;
  type: "VIP User" | "Normal User";
  umrahperformedon: string | "-";
  specialnotes: string | "-";
  bookeddata: string | "-";
  transactionid: string | "-";
  amountpaid: string | "-" | number;
}

export interface PerformerDetail {
  umrahPerformedNo: number;
  email: string;
  mobile: number;
  dob: string;
  gender: "Male" | "Female";
  assignedby: string | "-";
  assignedDate: string | "-";
}

export interface Performer {
  name: string;
  type: "VIP Performer" | "Normal Performer";
  performerDetail: PerformerDetail;
}

export type UmrahStatus =
  | "Performer Accepted"
  | "Performer Requested"
  | "Umrah In Progress"
  | "Umrah Completed"
  | "Performer Not Assigned";

export interface UmrahRequest {
  requestId: string;
  umrahFor: UmrahFor;
  livingStatus: "Alive" | "Deceased";
  gender: "Male" | "Female";
  performer: Performer | null;
  status: UmrahStatus;

  /** 👇 color stored directly */
  statusClass: string;
}

// -------- DATA --------

const umrahData: UmrahRequest[] = [
  {
    requestId: "UR_0342",
    umrahFor: {
      name: "Nasser El Kholy",
      type: "VIP User",
      umrahperformedon: "",
      specialnotes: "",
      bookeddata: "",
      transactionid: "",
      amountpaid: ""
    },
    livingStatus: "Alive",
    gender: "Male",
    performer: {
      name: "Mohamed Hamid Mohamed Al Qasimi",
      type: "VIP Performer",
      performerDetail: {
        umrahPerformedNo: 27,
        email: "mohamed.qasimi@gmail.com",
        mobile: 9876543210,
        dob: "1988-04-15",
        gender: "Male",
        assignedby: "-",
        assignedDate: ""
      }
    },
    status: "Performer Accepted",
    statusClass: "bg-blue-100 text-blue-700"
  },

  {
    requestId: "UR_0234",
    umrahFor: {
      name: "Mohamed Ahmed Mansour",
      type: "Normal User",
      umrahperformedon: "",
      specialnotes: "",
      bookeddata: "",
      transactionid: "",
      amountpaid: ""
    },
    livingStatus: "Deceased",
    gender: "Male",
    performer: {
      name: "Adnan Mohammed Pichok Al Balushi",
      type: "Normal Performer",
      performerDetail: {
        umrahPerformedNo: 12,
        email: "adnan.balushi@gmail.com",
        mobile: 9123456789,
        dob: "1992-09-10",
        gender: "Male",
        assignedby: "",
        assignedDate: ""
      }
    },
    status: "Performer Requested",
    statusClass: "bg-violet-100 text-violet-700"
  },

  {
    requestId: "UR_0756",
    umrahFor: {
      name: "Emna Said Riki Al Bulushi",
      type: "VIP User",
      umrahperformedon: "",
      specialnotes: "",
      bookeddata: "",
      transactionid: "",
      amountpaid: ""
    },
    livingStatus: "Alive",
    gender: "Female",
    performer: null,
    status: "Performer Not Assigned",
    statusClass: "bg-red-100 text-red-700"
  },

  {
    requestId: "UR_0213",
    umrahFor: {
      name: "Ramy Reda Yonan",
      type: "Normal User",
      umrahperformedon: "-",
      specialnotes: "",
      bookeddata: "",
      transactionid: "",
      amountpaid: ""
    },
    livingStatus: "Alive",
    gender: "Male",
    performer: {
      name: "Sarhan Nasser Mansoor Al Hina",
      type: "VIP Performer",
      performerDetail: {
        umrahPerformedNo: 40,
        email: "sarhan.alhina@gmail.com",
        mobile: 9988776655,
        dob: "1985-01-22",
        gender: "Male",
        assignedby: "",
        assignedDate: ""
      }
    },
    status: "Umrah Completed",
    statusClass: "bg-green-100 text-green-700"
  },

  {
    requestId: "UR_0346",
    umrahFor: {
      name: "Jannah Bahaaldin Ahmed Ali",
      type: "VIP User",
      umrahperformedon: "",
      specialnotes: "",
      bookeddata: "",
      transactionid: "",
      amountpaid: ""
    },
    livingStatus: "Alive",
    gender: "Female",
    performer: {
      name: "Hassan Abdulrahman Al Lawati",
      type: "Normal Performer",
      performerDetail: {
        umrahPerformedNo: 8,
        email: "hassan.lawati@gmail.com",
        mobile: 9012345678,
        dob: "1995-07-05",
        gender: "Male",
        assignedby: "",
        assignedDate: ""
      }
    },
    status: "Umrah In Progress",
    statusClass: "bg-yellow-100 text-yellow-700"
  }
];

export default umrahData;
