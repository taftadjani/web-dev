const users = [
    { name: "mario", premium: true },
    { name: "luigi", premium: false },
    { name: "yoshi", premium: true },
    { name: "toad", premium: true },
    { name: "peach", premium: false },
    { name: "merde", premium: true },
    { name: "merde", premium: true },
    { name: "merde", premium: true },
];

export const getPremiumUsers = users => users.filter(user => user.premium);
export default users;