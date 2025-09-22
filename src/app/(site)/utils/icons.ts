
import ProfileIcon from "../../../../public/profile.svg";
import AddPersonIcon from "../../../../public/person-add.svg";
import SettingIcon from "../../../../public/settings.svg";




export const Icon = { ProfileIcon }


export const AccountInfo = [
    {
        id: 1,
        key: "personal-info",
        title: "Personal Info",
        text: "Provide personal details and how we can reach you",
        Icon: ProfileIcon,
        alt: "profile"
    },
    {
        id: 2,
        key: "login-security",
        title: "Login & security",
        text: "Update your password and secure your account",
        Icon: SettingIcon,
        alt: "settings"
    },
    {
        id: 3,
        key: "referrals",
        title: "Referrals",
        text: "Invite friends to earn free scan",
        Icon: AddPersonIcon,
        alt: "add_person"
    },
]

