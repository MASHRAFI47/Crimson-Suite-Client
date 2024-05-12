import { Map, Marker } from "pigeon-maps"


const MapLocation = () => {
    return (
        <section className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                        <Marker width={50} anchor={[50.879, 4.6997]} />
                    </Map>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, assumenda! Architecto, maiores voluptatum repellendus aperiam facilis animi tempora voluptatibus mollitia doloribus, tempore nihil enim itaque harum, sit distinctio. Ut, voluptas.</p>
                </div>
            </div>
        </section>
    )
}

export default MapLocation