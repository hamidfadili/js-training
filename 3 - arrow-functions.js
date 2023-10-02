function regular(){
    console.log(this)
}

const arrow = () => {
    console.log(this)
}

regular()
arrow()

// regular.call({id: 'the new one'})
// arrow.call({id: 'the new one'})