const changePersonName = (person) => {
    person.name = "Wiesław";
}
const init = () => {
    const person = {
        name: "Michał",
        surname: "Kotliński",
    };

    changePersonName(person);
    console.log(person.name);
};
init();
