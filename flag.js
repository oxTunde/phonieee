        const flag = `https://www.countryflagsapi.com/png`                
        fetch(flag)
        .then(res => res.json())
        .then(flag => {
            console.log(flag)
        })