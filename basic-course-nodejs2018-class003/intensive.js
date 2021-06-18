const limit = 1e3;
module.exports = {
    simulateSync: function() {
        console.log('Starting the block simulate...');
        for(let i = 0; i <= limit; i += 1) {
            // (i === limit) ? console.log('Yap finished') : console.log(`${i}`)
            if(i === limit) console.log('Yap finished')
        }
    },
    simulateAsync: function() {
        console.log('Starting the block simulate...');
        setTimeout(() => {
            for(let i = 0; i <= limit; i += 1) {
                // (i === limit) ? console.log('Yap finished (after time out)') :  console.log(`${i}`);
                if(i === limit) console.log('Yap finished (after time out)');
            }
        }, 0);
        console.log('Finished loop');
    }
}