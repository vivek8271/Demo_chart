 const socket = io();
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = input.value.trim();
        if (message) {
            // Emit the message to the server
            socket.emit('chat message', message);
                // Clear the input
            input.value = '';
            }
        });

        // Listen for incoming messages
        socket.on('chat message', (msg) => {
            const item = document.createElement('textarea');

            item.setAttribute('id', "textContent")
            
            item.textContent = msg;
            item.setAttribute('readonly', true);

            messages.appendChild(item);
        
            messages.scrollTop = messages.scrollHeight;
        });