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
        title: 'project 4',
        description: 'project 4 description',
        url: '',
        image: ''
    },
    {
        title: 'project 5',
        description: 'project 5 description',
        url: '',
        image: ''
    },
    {
        title: 'project 6',
        description: 'project 6 description',
        url: '',
        image: ''
    },
    {
        title: 'project 7',
        description: 'project 7 description',
        url: '',
        image: ''
    }
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