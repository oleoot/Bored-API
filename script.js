const api_url = 'http://www.boredapi.com/api/activity/';
const btn = document.querySelector('#btn');
const wrapper = document.querySelector('#wrapper');

btn.addEventListener('click', getActivity)
async function getActivity() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    const { activity, accesability, type, participants } = data;
    let container = document.createElement('div');
    let nameElement = document.createElement('h1');
    nameElement.innerText = activity;
    container.append(nameElement);
    wrapper.append(container);
}
