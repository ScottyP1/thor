import CardItem from "./CardItem"

const list = [
    { title: 'DEPENDABLE', description: 'With a fleet of modern trucks and a network of skilled drivers, we guarantee reliable service and timely deliveries.' },
    { title: 'COST-EFFECTIVE', description: 'Our competitive pricing and flexible options ensure you get the best value for your transportation budget.' },
    { title: 'CUSTOMER-CENTRIC', description: 'We prioritize customer satisfaction, offering personalized service and real-time tracking for complete peace of mind.' },
    { title: 'NATIONWIDE COVERAGE', description: 'Wherever your destination, we provide comprehensive road freight solutions across the country.' },
]

export default function FactList() {
    return (
        <>
            {list.map((item) => {
                return (
                    <CardItem title={item.title} description={item.description} />
                )
            })}

        </>
    )
}