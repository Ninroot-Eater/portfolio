


let skills = [
    {
        name: "Python",
        level: "very good",
        content: "This is my first langauge, and so is my favourite. (I abuse array comprehensions a lot).",
        image: "python.svg"
    },
    {
        name: "Django",
        level: "very good",
        content: "The primary tool I use to build backend APIs with Python.",
        image: "django.png"
    },
    {
        name: "REST API development",
        level: "very good",
        content: "My main task as a backend developer. I also love to write technical documentations.",
        text: "REST"

    },
    {
        name: "Microsoft Graph API",
        level: "good",
        content: "I am kinda fimiliar with how to use MS Graph.",
        text: "MS Graph"
    },
    {
        name: "Git",
        level: "good",
        content: "Well, git for version control. Nothing special.",
        image: "github.png"
    },
    {
        name: "GraphQL development",
        level: "good",
        content: "I have also developed GraphQL APIs using Django.",
        image: "graphql.png"
    },
    {
        name: "JavaScript",
        level: "good",
        content: "My third language. I prefer Python though. But, JS is fun too.",
        image: "javascript.png"
    },
    {
        name: "Flask",
        level: "good",
        content: "Wrote my first website using Flask. Flask allowed me to know a lot of low-level stuffs.",
        image: "flask.svg"
    },
    {
        name: "Vue",
        level: "good",
        content: "My first frontend framework. I was amazed to see how powerful frontend frameworks are.",
        image: "vue.png"
    },
    {
        name: "PostgreSQL",
        level: "good",
        content: "My database of choice.",
        image: "postgres.png"
    },
    {
        name: "Linux (Ubuntu)",
        level: "good",
        content: "Got familiar after navigating on VPS'es.",
        image: "ubuntu.png"
    },
    {
        name: "Nginx",
        level: "good",
        content: "I prefer Nginx over Apache.",
        image: "nginx.png"
    },
    {
        name: "HTML, CSS",
        level: "good",
        content: "Soon, this will probably change. I am learning CSS!",
        text: "HTML, CSS"
    },
    {
        name: "React",
        level: "learning",
        content: "This site is built using React. I prefer React over Vue since I feel like React seems more logical.",
        image: "react.png"
    },
    {
        name: "Go",
        level: "learning",
        content: "Due to lack of concurrency support of Python, I am switching over to Go.",
        image: "go.png"
    },
    {
        name: "FastAPI",
        level: "basic understanding",
        content: "I have read the docs and made a basic app. Would love to make a REST API with it one day.",
        image: "fastapi.svg"
    }
]


let per_page = 3



skills.map(c=>(c.page=Math.floor(skills.indexOf(c)/per_page)))
skills.map(c=>(c["secondary"]="level: "+c["level"]))

export default skills;