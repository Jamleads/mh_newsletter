import {
  MdOutlineCampaign,
  MdOutlineSignpost,
  MdOutlineMapsHomeWork,
} from "react-icons/md";
import { FaUserInjured } from "react-icons/fa";
import { RiDraftLine } from "react-icons/ri";
import { PiUsersFourDuotone } from "react-icons/pi";

export const sideBarData = [
  {
    id: 1,
    pageLink: "/",
    pageName: "Dashboard",
    pageIcon: MdOutlineMapsHomeWork,
  },
  {
    id: 2,
    pageLink: "/subscribers",
    pageName: "subscribers",
    pageIcon: PiUsersFourDuotone,
  },
  {
    id: 3,
    pageLink: "/campaign",
    pageName: "campaign",
    pageIcon: MdOutlineCampaign,
  },
  {
    id: 4,
    pageLink: "/post",
    pageName: "post",
    pageIcon: MdOutlineSignpost,
  },
  {
    id: 5,
    pageLink: "/draft",
    pageName: "draft",
    pageIcon: RiDraftLine,
  },
  {
    id: 5,
    pageLink: "/users",
    pageName: "users",
    pageIcon: FaUserInjured,
  },
];

export const campaignData = [
  {
    id: 1,
    campaignTitle: "Campaign 1",
    campaignStatus: "Active",
    createdBy: "Marketer Username",
    createdDate: "2021-05-20",
    lastModifiedDate: "2021-05-20",
  },
  {
    id: 2,
    campaignTitle: "Campaign 2",
    campaignStatus: "Daft",
    createdBy: "Marketer Username",
    createdDate: "2021-05-20",
    lastModifiedDate: "2021-05-20",
  },
  {
    id: 3,
    campaignTitle: "Campaign 3",
    campaignStatus: "Active",
    createdBy: "Marketer Username",
    createdDate: "2021-05-20",
    lastModifiedDate: "2021-05-20",
  },
  {
    id: 4,
    campaignTitle: "Campaign 4",
    campaignStatus: "Active",
    createdBy: "Marketer Username",
    createdDate: "2021-05-20",
    lastModifiedDate: "2021-05-20",
  },
  {
    id: 5,
    campaignTitle: "Campaign 5",
    campaignStatus: "Pending",
    createdBy: "Marketer Username",
    createdDate: "2021-05-20",
    lastModifiedDate: "2021-05-20",
  },
];

// dummy
export const dashVeriicationProces = [
  {
    title: "Email veriication",
    details: "Verify your email address",
    status: "Done",
  },
  {
    title: "Complete profile",
    details:
      "Complete your profile information manually or migrate your MailerLite Classic account to get started",
    status: "Done",
  },
  {
    title: "Confirm account",
    details:
      "Confirm your account in order to start sending campaigns and publishing sites.",
    status: "Complete",
  },
];

export const boardData = [
  {
    name: "Subscribers",
    total: 100,
    note: "Want more subscribers? Grow your email list with",
    action: "signup forms",
    to: "/campainSignform",
  },
  {
    name: "Emails sent",
    total: 60,
    note: "Want to send more emails? use",
    action: "send email",
    to: "/campainSignform",
  },
  {
    name: "Active Forms",
    total: 10,
    note: "Create more active forms?",
    action: "forms",
    to: "/campainSignform",
  },
  {
    name: "Campaign",
    total: 100,
    note: "Reach your subscribers with more campaign",
    action: "create campaign",
    to: "/campainSignform",
  },
  {
    name: "Post",
    total: 100,
    note: "Reach your subscribers with more post",
    action: "create post",
    to: "/campainSignform",
  },
];

export const dummySubscribers = [
  {
    id: 1,
    firstname: "John",
    email: "test@eample.com",
    phoneNmuber: "+234 32345678",
    county: "United state",
    status: true,
  },
  {
    id: 2,
    firstname: "Mike",
    email: "test@eample.com",
    phoneNmuber: "+234 32345678",
    county: "United state",
    status: true,
  },
];
