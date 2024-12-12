const Filtre = (props)=>{
    return(
    <div style={{marginTop:"10px", display:"flex", justifyContent:"center"}}>
        <input
        onChange={(e)=>props.searchTitre(e.target.value)}
        value={props.filtreTitre}
        style={{ height:"30px", width:"300px", borderRadius:"8px"}}
        type="text" placeholder="Rechercher un film..." />
        <input
        onChange={(e)=>props.searchNote(e.target.value)}
        value={props.filtreNote}
        style={{ height:"30px", width:"50px", borderRadius:"8px"}}
        type="text" placeholder="Note..." />
        <button style={{height:"25px",alignSelf:"center", backgroundColor:"black", color:"white", borderRadius:"10px"}}>Rechercher</button>
    </div>
    )
}

export default Filtre;