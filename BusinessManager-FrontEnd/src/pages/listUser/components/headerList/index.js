function HeaderList(){
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2vh'}}>
            <h1 style={{fontSize: '1.8rem'}}> Usuários </h1>
            <button className="btn-new-user"> <b style={{fontSize: '20px'}}>+</b> NOVO USUÁRIO</button>
        </div>
    )
}
export default HeaderList