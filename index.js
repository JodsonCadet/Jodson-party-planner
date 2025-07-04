const eventDetails = async(id) => {
try {
    const response = await fetch (
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/events/");
    const data = await response.json();
    console.log(data);
    return data;
 } catch (e) {
    console.error(e);
    return [];
 }
};
const eventDetail = async(id) => {
    try {
    const response = await fetch (`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/events/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
 } catch (e) {
    console.error(e);
    return [];
 }
};
const displayResults = async (id) => {
    const events = await eventDetails();
    $app = document.querySelector("#app");
    // console.log(events);
    $h2 = document.createElement("h2");
    $h2.textContent = "Upcoming events";
    $app.append($h2);

    for (let i = 0; i < events.data.length; i++) {
        $button = document.createElement(`button`)
        const eventData = events.data[i]
       $button.addEventListener("click",() => eventDetail(eventData));
       $button.textContent = `Event ${i + 1} ${eventData.name}`;
        $app.append($button);

         }
        };
        displayResults();
        
    

// const start = () => {
//     eventDetails();
// }
// start();