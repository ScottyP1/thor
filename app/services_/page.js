import CardItem from "@/components/CardItem";
import FactList from "@/components/FactList";

import TruckImg from '@/public/truckCard.png';
import LightCargo from '@/public/lightCargo.jpg';
import nightTruck from '@/public/nightTruck.jpg';
import specialCargo from '@/public/specialcargo.jpg';

export default function Services() {
    return (
        <div className="linearBackground">
            <div className="mt-24 m-3">
                <h1 className="text-center text-2xl xl:text-4xl tracking-[15px]">SERVICES</h1>
                <p className="text-xs md:text-[15px] mb-6 mt-3 tracking-[1px] xl:tracking-[5px]">
                    At Thor Transport, we specialize in providing reliable and efficient road freight services across the country. Whether you need to transport a single pallet or a full truckload, our experienced team is dedicated to ensuring your goods arrive safely and on time.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-3">
                <CardItem img={TruckImg} title='Full Truckload (FTL)'
                    description='Ideal for large shipments, our FTL service guarantees that your cargo travels directly from 
                    point A to point B without transfers, minimizing handling and transit time.' />
                <CardItem img={LightCargo} title='Less Than Truckload (LTL)'
                    description='Perfect for smaller shipments, our LTL service combines your freight with other shipments, 
                        offering cost-effective solutions without compromising on delivery schedules.' />
                <CardItem img={nightTruck} title='Express Shipping'
                    description='For time-sensitive deliveries, our express shipping service provides expedited transport, 
                        ensuring your urgent shipments reach their destination as quickly as possible.' />
                <CardItem img={specialCargo} title='Specialized Freight'
                    description='We cater to unique transportation needs, including oversized loads, hazardous materials, 
                        and temperature-controlled goods.' />
            </div>
            <div className="text-center text-black m-3">
                <h2 className="tracking-[5px] text-md">WHY CHOOSE US</h2>
                <FactList />
            </div>
            <div className="mt-6 text-center text-black m-3 mb-12 ">
                <span className="text-sm md:text-md">Join countless satisfied customers who trust RoadFreight Express for all their road freight needs. Contact us today for a quote or to learn more about how we can help streamline your logistics.</span>
            </div>
        </div >
    );
}