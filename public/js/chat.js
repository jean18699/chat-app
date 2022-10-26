const socket = io()

socket.on('updatedCount', (count)=>{
    console.log('the count has been updated', count);
})


const button = document.querySelector('#increment');

button.addEventListener('click', ()=>{
    socket.emit('increment');
});