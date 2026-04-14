console.log('consol')

const allLesson = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/levels/all')
    const data = await res.json()
    displayLesson(data.data)
}

const displayLesson = (lessons) => {
    // console.log(lessons)
    const lessonBtn = document.getElementById('lesson-btn')
    lessonBtn.innerHTML = ''
    for (const lesson of lessons) {
        console.log(lesson)
        const btn = document.createElement('button')
        btn.className = "active border border-[#422AD5] rounded-sm py-2 px-4 font-bold text-[14px] text-[#422AD5]"
        btn.innerHTML = `
                    <i class="fa-solid fa-book-open"></i>
                    Lesson - ${lesson.level_no}
                </button>
        `
        btn.addEventListener('click', () => {
            const allButton = document.querySelectorAll('.active')
            for (const singleButton of allButton) {
                singleButton.classList.remove('bg-[#422AD5]', 'text-white')
                singleButton.classList.add('text-[#422AD5]')
            }
            btn.classList.add('bg-[#422AD5]', 'text-white')
        })
        lessonBtn.appendChild(btn)
    }
}
allLesson()