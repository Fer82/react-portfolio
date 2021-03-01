import Col from 'react-bootstrap/Col';
import Project from '../../components/Project';

const projects = [
    {
        title: 'Projecte 1',
        description: 'This is the first project for our Coding Bootcamp in a Group/Team setting.',
        url: 'https://github.com/Fer82/project-one',
        image: ''
    },
    {
        title: 'Project 2',
        description: 'This was the Second project for the full stack web development program at UC Irvine, in which the goal was to build an interactive application',
        url: 'https://github.com/Fer82/food-inventory',
        image: ''
    },
    {
        title: 'Project 3',
        description: 'This was the final project for the full stack web development program at UC Irvine, in which the goal was to create an application that has real world value. The criteria for this project included the use of REACTJS, Node, MYSQL or MongoDB, and the use of two new technologies.',
        url: 'https://github.com/Fer82/one_mans_trash',
        image: ''
    },
    {
        title: 'Work Day Schedule',
        description: 'Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.',
        url: 'https://github.com/Fer82/H-5-Work-Day-Scheduler',
        image: ''
    },
    {
        title: 'Pasword Generator',
        description: 'Application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code',
        url: 'https://github.com/Fer82/H3-Password-Generator',
        image: ''
    },
    {
        title: 'Weather Dasboard',
        description: 'Application API, using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS',
        url: 'https://github.com/Fer82/H-6-Weather-Dashboard',
        image: ''
    },
];

export default function Portfolio() {
    const projectList = projects.map((p, index) => {
        return (
            <Col key={index} md={4} className='mr-1 mb-3'>
                <Project title={p.title} description={p.description} url={p.url} image={p.image} />
            </Col>
        );
    });

    return (
        <main className="container">
            <section className="row">
                {projectList}
            </section>
        </main>
    )
}