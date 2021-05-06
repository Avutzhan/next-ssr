import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) => {
    return (
        <div>
            <h1>Robots</h1>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <div>Robots data</div>
            <div>
                {
                    props.robots.map(robot => (
                        <li key={robot.id}>
                            <Link href={`robots/${robot.id}`}>
                                {robot.name}
                            </Link>
                        </li>
                    ))
                }
            </div>
        </div>
    )
}

Robots.getInitialProps = async function() {
    const res = await fetch('http://localhost:3001')
    const data = await res.json();
    return {
        robots: data
    }
}

export default Robots;