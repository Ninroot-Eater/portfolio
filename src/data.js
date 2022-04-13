


let skills = [
    {
        name: "Python",
        level: "very good",
        content: "This is my first langauge, and so is my favourite. (I abuse array comprehensions a lot)."
    },
    {
        name: "Django",
        level: "very good",
        content: "The primary tool I use to build backend APIs with Python."
    },
    {
        name: "REST API development",
        level: "very good",
        content: "My main task as a backend developer. I also love to write technical documentations."

    },
    {
        name: "Microsoft Graph API",
        level: "good",
        content: "I am kinda fimiliar with how to use MS Graph."
    },
    {
        name: "Git",
        level: "good",
        content: "Well, git for version control. Nothing special."
    },
    {
        name: "GraphQL development",
        level: "good",
        content: "I have also developed GraphQL APIs using Django."
    },
    {
        name: "JavaScript",
        level: "good",
        content: "My third language. I prefer Python though. But, JS is fun too."
    },
    {
        name: "Flask",
        level: "good",
        content: "Wrote my first website using Flask. Flask allowed me to know a lot of low-level stuffs."
    },
    {
        name: "Vue",
        level: "good",
        content: "My first frontend framework. I was amazed to see how powerful frontend frameworks are."
    },
    {
        name: "PostgreSQL",
        level: "good",
        content: "My database of choice."
    },
    {
        name: "Linux (Ubuntu)",
        level: "good",
        content: "Got familiar after navigating on VPS'es."
    },
    {
        name: "Nginx",
        level: "good",
        content: "I prefer Nginx over Apache."
    },
    {
        name: "HTML, CSS",
        level: "good",
        content: "Soon, this will probably change. I am learning CSS!"
    },
    {
        name: "React",
        level: "learning",
        content: "This site is built using React. I prefer React over Vue since I feel like React seems more logical."
    },
    {
        name: "Go",
        level: "learning",
        content: "Due to lack of concurrency support of Python, I am switching over to Go."
    },
    {
        name: "FastAPI",
        level: "basic understanding",
        content: "I have read the docs and made a basic app. Would love to make a REST API with it one day."
    }
]


let per_page = 3



skills.map(c=>(c.page=Math.floor(skills.indexOf(c)/per_page)))
skills.map(c=>(c["secondary"]="level: "+c["level"]))

export default skills;