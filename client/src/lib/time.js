const timeFormat=(min)=>{
    const hours= Math.floor(min/60);
    const miniute=min%60;
    return `${hours}h ${miniute}m`
}
export default timeFormat ;