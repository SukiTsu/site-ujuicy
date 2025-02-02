import Loader from "../component/ContainerLoader"


const NotFound = ({}) => {

    const url = window.location.href

    if (url.includes("evenement")){
        return(
            <>
            <div className="content">
                <h1>Chargement des données...</h1>
                <table>
                    <tbody>
                    <tr>
                        <td><Loader/></td>
                        <td><Loader/></td>
                        <td><Loader/></td>
                    </tr>
                    <tr>
                        <td><Loader/></td>
                        <td><Loader/></td>
                        <td><Loader/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </>
        )
    }

    return(
        <>
            <h1>Page non trouvé</h1>
        </>
    )

}

export default NotFound