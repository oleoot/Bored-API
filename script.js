const api_url = 'http://www.boredapi.com/api/activity/';
const btn = document.querySelector('#btn');
const wrapper = document.querySelector('#wrapper');

btn.addEventListener('click', getActivity)
async function getActivity() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    const { activity, accessibility, type, participants } = data;
    let nameElement = document.querySelector('#name');
    let accessibilityElement = document.querySelector('#accessibility');
    let typeElement = document.querySelector('#type');
    let participantsElement = document.querySelector('#participants');
    nameElement.innerText = activity;
    accessibilityElement.innerText = accessibility;
    typeElement.innerText = type;
    participantsElement.innerText = participants;
    wrapper.append(nameElement, typeElement, participantsElement, accessibilityElement);
}
