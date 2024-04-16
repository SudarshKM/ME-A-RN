


const parent = () => {
    let parentVariable = "parentVariable"
    console.log('parent');

    const child = ()=> {
        console.log('child');
        console.log(parentVariable);
    }

    child();
}

parent();