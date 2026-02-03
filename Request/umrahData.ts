
export interface UmrahFor {
  name: string;
  type: "VIP User" | "Normal User"|"";
  umrahperformedon: string | "-";
  specialnotes: string | "-";
  bookeddata: string | "-";
  transactionid: string | "-";
  amountpaid: string | "-" | number;
  requestedby:string;
  mobile:number;
  emailid:string;
  nationality:string;
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
  type: "VIP Performer" | "Normal Performer"|"";
  performerDetail: PerformerDetail | null;
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
  statusClass: string;
}




const umrahData: UmrahRequest[] = [
  {
    requestId: "UR_0342",
    umrahFor: {
      name: "Nasser El Kholy",
      type: "VIP User",
      umrahperformedon: "2025-02-12",
      specialnotes: "Wheelchair assistance required",
      bookeddata: "2025-01-20",
      transactionid: "TXN89342",
      amountpaid: 500,
      requestedby: "Ahmed Hassan",
      mobile: 9876543210,
      emailid: "ahmed.hassan@gmail.com",
      nationality: "Egyptian"
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
        assignedby: "Admin",
        assignedDate: "2025-01-25"
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
      umrahperformedon: "2025-03-10",
      specialnotes: "Senior citizen assistance",
      bookeddata: "2025-02-05",
      transactionid: "TXN23456",
      amountpaid: 300,
      requestedby: "Fatima Noor",
      mobile: 9123456789,
      emailid: "fatima.noor@gmail.com",
      nationality: "Omani"
    },
    livingStatus: "Deceased",
    gender: "Male",
    performer: null,
    status: "Performer Requested",
    statusClass: "bg-violet-100 text-violet-700"
  },

  {
    requestId: "UR_0756",
    umrahFor: {
      name: "Emna Said Riki Al Bulushi",
      type: "Normal User",
      umrahperformedon: "2025-05-18",
      specialnotes: "Female performer preferred",
      bookeddata: "2025-04-01",
      transactionid: "TXN55678",
      amountpaid: 280,
      requestedby: "Ali Riki",
      mobile: 9001122334,
      emailid: "ali.riki@gmail.com",
      nationality: "Omani"
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
      type: "VIP User",
      umrahperformedon: "2025-01-18",
      specialnotes: "Fast-track service requested",
      bookeddata: "2024-12-30",
      transactionid: "TXN99881",
      amountpaid: 700,
      requestedby: "Mina Reda",
      mobile: 9988776655,
      emailid: "mina.reda@gmail.com",
      nationality: "Egyptian"
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
        assignedby: "Admin",
        assignedDate: "2024-12-31"
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
      umrahperformedon: "2025-04-02",
      specialnotes: "Wheelchair & hotel pickup",
      bookeddata: "2025-03-10",
      transactionid: "TXN44556",
      amountpaid: 600,
      requestedby: "Bahaaldin Ali",
      mobile: 9012345678,
      emailid: "bahaaldin.ali@gmail.com",
      nationality: "Saudi"
    },
    livingStatus: "Alive",
    gender: "Female",
    performer: {
      name: "Hassan Abdulrahman Al Lawati",
      type: "VIP Performer",
      performerDetail: {
        umrahPerformedNo: 8,
        email: "hassan.lawati@gmail.com",
        mobile: 9012345678,
        dob: "1995-07-05",
        gender: "Male",
        assignedby: "Admin",
        assignedDate: "2025-03-15"
      }
    },
    status: "Umrah In Progress",
    statusClass: "bg-yellow-100 text-yellow-700"
  },

  /* ---------- EXTRA 10 RECORDS ---------- */

  {
    requestId: "UR_0401",
    umrahFor: {
      name: "Abdul Kareem Yusuf",
      type: "Normal User",
      umrahperformedon: "2025-06-12",
      specialnotes: "Diabetic care required",
      bookeddata: "2025-05-20",
      transactionid: "TXN67001",
      amountpaid: 350,
      requestedby: "Salma Yusuf",
      mobile: 9345612234,
      emailid: "salma.yusuf@gmail.com",
      nationality: "Indian"
    },
    livingStatus: "Alive",
    gender: "Male",
    performer: null,
    status: "Performer Requested",
    statusClass: "bg-violet-100 text-violet-700"
  },
  {
  requestId: "UR_0404",
  umrahFor: {
    name: "Yusuf Abdullah Al Riyami",
    type: "Normal User",
    umrahperformedon: "2025-07-15",
    specialnotes: "Needs Arabic-speaking performer",
    bookeddata: "2025-06-20",
    transactionid: "TXN67004",
    amountpaid: 320,
    requestedby: "Abdullah Riyami",
    mobile: 9234567812,
    emailid: "abdullah.riyami@gmail.com",
    nationality: "Omani"
  },
  livingStatus: "Alive",
  gender: "Male",
  performer: null,
  status: "Performer Requested",
  statusClass: "bg-violet-100 text-violet-700"
},

{
  requestId: "UR_0405",
  umrahFor: {
    name: "Maryam Khalid Hassan",
    type: "VIP User",
    umrahperformedon: "2025-08-01",
    specialnotes: "Elderly assistance required",
    bookeddata: "2025-07-05",
    transactionid: "TXN67005",
    amountpaid: 750,
    requestedby: "Khalid Hassan",
    mobile: 9345678901,
    emailid: "khalid.hassan@gmail.com",
    nationality: "Saudi"
  },
  livingStatus: "Alive",
  gender: "Female",
  performer: {
    name: "Noor Ahmed Al Saadi",
    type: "VIP Performer",
    performerDetail: {
      umrahPerformedNo: 22,
      email: "noor.saadi@gmail.com",
      mobile: 9345678901,
      dob: "1991-11-08",
      gender: "Female",
      assignedby: "Admin",
      assignedDate: "2025-07-10"
    }
  },
  status: "Performer Accepted",
  statusClass: "bg-blue-100 text-blue-700"
},

{
  requestId: "UR_0406",
  umrahFor: {
    name: "Salim Rashid Al Harthy",
    type: "Normal User",
    umrahperformedon: "2025-08-12",
    specialnotes: "Prefers early morning rituals",
    bookeddata: "2025-07-18",
    transactionid: "TXN67006",
    amountpaid: 340,
    requestedby: "Rashid Harthy",
    mobile: 9456781234,
    emailid: "rashid.harthy@gmail.com",
    nationality: "Omani"
  },
  livingStatus: "Alive",
  gender: "Male",
  performer: null,
  status: "Performer Not Assigned",
  statusClass: "bg-red-100 text-red-700"
},

{
  requestId: "UR_0407",
  umrahFor: {
    name: "Ahmed Farooq Khan",
    type: "VIP User",
    umrahperformedon: "2025-08-20",
    specialnotes: "Private transport required",
    bookeddata: "2025-07-25",
    transactionid: "TXN67007",
    amountpaid: 800,
    requestedby: "Farooq Khan",
    mobile: 9567812345,
    emailid: "farooq.khan@gmail.com",
    nationality: "Indian"
  },
  livingStatus: "Alive",
  gender: "Male",
  performer: {
    name: "Abdul Latif Al Shukri",
    type: "VIP Performer",
    performerDetail: {
      umrahPerformedNo: 55,
      email: "abdul.shukri@gmail.com",
      mobile: 9567812345,
      dob: "1980-03-19",
      gender: "Male",
      assignedby: "Admin",
      assignedDate: "2025-07-28"
    }
  },
  status: "Umrah In Progress",
  statusClass: "bg-yellow-100 text-yellow-700"
},

{
  requestId: "UR_0408",
  umrahFor: {
    name: "Zainab Noor Syed",
    type: "Normal User",
    umrahperformedon: "2025-09-02",
    specialnotes: "First time Umrah",
    bookeddata: "2025-08-01",
    transactionid: "TXN67008",
    amountpaid: 300,
    requestedby: "Syed Noor",
    mobile: 9678123456,
    emailid: "syed.noor@gmail.com",
    nationality: "Pakistani"
  },
  livingStatus: "Alive",
  gender: "Female",
  performer: null,
  status: "Performer Requested",
  statusClass: "bg-violet-100 text-violet-700"
},

{
  requestId: "UR_0409",
  umrahFor: {
    name: "Ibrahim Saleh Al Amri",
    type: "VIP User",
    umrahperformedon: "2025-09-15",
    specialnotes: "Medical monitoring required",
    bookeddata: "2025-08-10",
    transactionid: "TXN67009",
    amountpaid: 900,
    requestedby: "Saleh Amri",
    mobile: 9781234567,
    emailid: "saleh.amri@gmail.com",
    nationality: "Saudi"
  },
  livingStatus: "Alive",
  gender: "Male",
  performer: {
    name: "Khalfan Said Al Lawati",
    type: "VIP Performer",
    performerDetail: {
      umrahPerformedNo: 62,
      email: "khalfan.lawati@gmail.com",
      mobile: 9781234567,
      dob: "1978-06-11",
      gender: "Male",
      assignedby: "Admin",
      assignedDate: "2025-08-15"
    }
  },
  status: "Umrah Completed",
  statusClass: "bg-green-100 text-green-700"
},

{
  requestId: "UR_0410",
  umrahFor: {
    name: "Fatima Zahra Ali",
    type: "Normal User",
    umrahperformedon: "2025-09-25",
    specialnotes: "Female performer mandatory",
    bookeddata: "2025-08-18",
    transactionid: "TXN67010",
    amountpaid: 330,
    requestedby: "Ali Zahra",
    mobile: 9890011223,
    emailid: "ali.zahra@gmail.com",
    nationality: "Egyptian"
  },
  livingStatus: "Alive",
  gender: "Female",
  performer: null,
  status: "Performer Requested",
  statusClass: "bg-violet-100 text-violet-700"
},

{
  requestId: "UR_0411",
  umrahFor: {
    name: "Omar Bin Saeed",
    type: "VIP User",
    umrahperformedon: "2025-10-05",
    specialnotes: "Luxury accommodation",
    bookeddata: "2025-09-01",
    transactionid: "TXN67011",
    amountpaid: 950,
    requestedby: "Saeed Omar",
    mobile: 9009988776,
    emailid: "saeed.omar@gmail.com",
    nationality: "UAE"
  },
  livingStatus: "Alive",
  gender: "Male",
  performer: {
    name: "Majid Rashid Al Nabhani",
    type: "VIP Performer",
    performerDetail: {
      umrahPerformedNo: 70,
      email: "majid.nabhani@gmail.com",
      mobile: 9009988776,
      dob: "1975-12-02",
      gender: "Male",
      assignedby: "Admin",
      assignedDate: "2025-09-05"
    }
  },
  status: "Performer Accepted",
  statusClass: "bg-blue-100 text-blue-700"
},

{
  requestId: "UR_0412",
  umrahFor: {
    name: "Sara Mahmood Khan",
    type: "Normal User",
    umrahperformedon: "2025-10-18",
    specialnotes: "Group travel coordination",
    bookeddata: "2025-09-10",
    transactionid: "TXN67012",
    amountpaid: 310,
    requestedby: "Mahmood Khan",
    mobile: 9887766554,
    emailid: "mahmood.khan@gmail.com",
    nationality: "Indian"
  },
  livingStatus: "Alive",
  gender: "Female",
  performer: null,
  status: "Performer Not Assigned",
  statusClass: "bg-red-100 text-red-700"
},

{
  requestId: "UR_0413",
  umrahFor: {
    name: "Hamad Khalifa Al Thani",
    type: "VIP User",
    umrahperformedon: "2025-11-01",
    specialnotes: "Private guide requested",
    bookeddata: "2025-10-01",
    transactionid: "TXN67013",
    amountpaid: 1000,
    requestedby: "Khalifa Thani",
    mobile: 9776655443,
    emailid: "khalifa.thani@gmail.com",
    nationality: "Qatari"
  },
  livingStatus: "Alive",
  gender: "Male",
  performer: {
    name: "Salem Mohammed Al Kuwari",
    type: "VIP Performer",
    performerDetail: {
      umrahPerformedNo: 80,
      email: "salem.kuwari@gmail.com",
      mobile: 9776655443,
      dob: "1972-08-21",
      gender: "Male",
      assignedby: "Admin",
      assignedDate: "2025-10-05"
    }
  },
  status: "Umrah In Progress",
  statusClass: "bg-yellow-100 text-yellow-700"
}
,

  {
    requestId: "UR_0402",
    umrahFor: {
      name: "Aisha Rahman",
      type: "VIP User",
      umrahperformedon: "2025-06-25",
      specialnotes: "Female-only assistance",
      bookeddata: "2025-05-30",
      transactionid: "TXN67002",
      amountpaid: 650,
      requestedby: "Omar Rahman",
      mobile: 9456123789,
      emailid: "omar.rahman@gmail.com",
      nationality: "Bangladeshi"
    },
    livingStatus: "Alive",
    gender: "Female",
    performer: {
      name: "Fatima Noor Al Balushi",
      type: "VIP Performer",
      performerDetail: {
        umrahPerformedNo: 15,
        email: "fatima.balushi@gmail.com",
        mobile: 9456123789,
        dob: "1992-09-12",
        gender: "Female",
        assignedby: "Admin",
        assignedDate: "2025-06-05"
      }
    },
    status: "Performer Accepted",
    statusClass: "bg-blue-100 text-blue-700"
  },

  {
    requestId: "UR_0403",
    umrahFor: {
      name: "Hussain Ali Khan",
      type: "Normal User",
      umrahperformedon: "2025-07-02",
      specialnotes: "Language support needed",
      bookeddata: "2025-06-10",
      transactionid: "TXN67003",
      amountpaid: 320,
      requestedby: "Zainab Khan",
      mobile: 9898123456,
      emailid: "zainab.khan@gmail.com",
      nationality: "Pakistani"
    },
    livingStatus: "Alive",
    gender: "Male",
    performer: null,
    status: "Performer Not Assigned",
    statusClass: "bg-red-100 text-red-700"
  }
];

export default umrahData;
