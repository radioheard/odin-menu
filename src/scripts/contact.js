import insta from '../instagram.png';
import twitter from '../twitter.png';
import wsp from '../whatsapp.png';
import tel from '../phone.png';
export default function contact() {
    const element = document.getElementById('content');
    const header = document.createElement('h1');
    let headerT = document.createTextNode('Contact');
    header.appendChild(headerT);
    element.appendChild(header);

    //Form stuff

    function formSlot(txt, type, id) {
        const div = document.createElement('div');
        const label = document.createElement('label');
        const br = document.createElement('br')
        const input = document.createElement('input');
        let labelT = document.createTextNode(txt);
        
        form.appendChild(div);
        label.appendChild(labelT);
        label.for = id;
        div.appendChild(label);
        div.appendChild(br);
        input.type = type;
        input.id = id;
        div.appendChild(input);
    }


    const form = document.createElement('form');
    const submit = document.createElement('div');
    const txtarea = document.createElement('textarea');
    const btn = document.createElement('button');
    const btnT = document.createTextNode('Send');
    submit.classList.add('submit');
    btn.appendChild(btnT);

    txtarea.name = 'msg';
    txtarea.id= 'msg';
    txtarea.cols = '30';
    txtarea.rows = '10';
    txtarea.placeholder = 'Leave us a message';

    element.appendChild(form);
    formSlot('Name','text','name');
    formSlot('Last Name','text','lastname');
    formSlot('Phone Number','tel','tel');
    formSlot('E-mail','email','email');
    form.appendChild(submit);
    submit.appendChild(txtarea);
    submit.appendChild(btn);

    // Socials stuff

    function socialSlot (src, alt, txt) {
        const link = document.createElement('a');
        link.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
        const div = document.createElement('div');
        const img = new Image();
        img.src = src;
        img.alt = alt;
        const span = document.createElement('span');
        const spanT = document.createTextNode(txt);
        span.appendChild(spanT)

        socials.appendChild(link);
        link.appendChild(div);
        div.appendChild(img);
        div.appendChild(span);
    }

    const socials = document.createElement('div');
    socials.classList.add('socials');
    element.appendChild(socials)
    socialSlot(insta, 'instagram', '@slogonresto');
    socialSlot(twitter, 'twitter', '@slogonok');
    socialSlot(wsp, 'whatsapp', 'Chat with us');
    socialSlot(tel, 'phone', '+54 9 2235-598010')


}