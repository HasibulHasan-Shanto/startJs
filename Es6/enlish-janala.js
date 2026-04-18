console.log('consol')

const allLesson = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/levels/all')
    const data = await res.json()
    displayLesson(data.data)
}


const singleLesson = (id) => {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        .then(res => res.json())
        .then(data => displaySingleLesson(data.data))

}
const displaySingleLesson = (words) => {
    // console.log(words)
    const lessonContainer = document.getElementById('lesson-container')
    lessonContainer.innerHTML = ''
    if (words.length === 0) {
        lessonContainer.innerHTML = `
        <div class="col-span-3 flex justify-center items-center min-h-[300px]">
            <div class="bg-white shadow-lg rounded-xl p-10 text-center border w-[700px]">
                <h2 class="text-2xl font-bold text-gray-700 mb-2">
                    😢 No Data Found
                </h2>
                <p class="text-gray-500">
                    This lesson has no words available.
                </p>
            </div>
        </div>
    `
        return
    }
    for (const word of words) {
        const div = document.createElement('div')
        div.className = "bg-[#FFFFFF] py-20 px-5 text-center rounded-xl shadow-md"
        div.innerHTML = `
                                <h1 class="font-bold text-[24px]">
                            ${word.word}
                        </h1>
                        <p class="font-semibold text-[18px]">
                            Meaning/Pronunciation
                        </p>
                        <h2 class="font-bold text-[18px]">
                            ${word.meaning} / ${word.pronunciation}
                        </h2>
                        <div class="flex items-center justify-between">
                        <div class="info bg-gray-300 px-3 py-2 text-center rounded-sm">
                        <i class="fa-solid fa-circle-info"></i>
                        </div>
                        <div class="bg-gray-300 px-3 py-2 text-center rounded-sm">
                        <i class="fa-solid fa-volume-high"></i>
                        </div>
                        
                        
                        </div>
        `
        const infoButton = div.querySelector('.info')
        infoButton.addEventListener('click', () => {
            loadWord(word.id)
        })
        lessonContainer.appendChild(div)
    }

}

const loadWord = (id) => {
    fetch(`https://openapi.programming-hero.com/api/word/${id}`)
        .then(res => res.json())
        .then(data => displayWord(data.data))
}
const displayWord = (singleWords) => {
    const modalContent = document.getElementById('modal-content')
    modalContent.innerHTML = `
                                <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h1 class="font-bold text-[20px]">
                        ${singleWords.word}
                    </h1>
                    <p class="font-bold">
                        Meaning
                    </p>
                    <p>
                        ${singleWords.meaning}
                    </p>
                    <h3 class="font-bold text-[18px]">
                        Example
                    </h3>
                    <p>
                        ${singleWords.sentence}
                    </p>
                    <h4 class="font-bold">
                        সমার্থক শব্দ গুলো
                    </h4>
<div class="flex items-center gap-2">
    ${singleWords.synonyms?.map(s =>
        `<span class="bg-sky-400 px-4 py-1 rounded-md my-2">${s}</span>`
    ).join('')
        }
</div>
    <button class=" bg-[#422AD5] rounded-sm py-2 px-4 font-bold text-[14px] text-white">
        Complete Learning
    </button>
            `
    document.getElementById('my_modal_3').showModal()

}
const displayLesson = (lessons) => {
    // console.log(lessons)
    const lessonBtn = document.getElementById('lesson-btn')
    lessonBtn.innerHTML = ''
    for (const lesson of lessons) {
        // console.log(lesson)
        const btn = document.createElement('button')
        btn.className = "lesson-btn border border-[#422AD5] rounded-sm py-2 px-4 font-bold text-[14px] text-[#422AD5]"
        btn.innerHTML = `
                    <i class="fa-solid fa-book-open"></i>
                    Lesson - ${lesson.level_no}
        `
        btn.addEventListener('click', () => {
            singleLesson(lesson.level_no)
            const card = document.getElementById('card')
            card.style.display = 'none'
            const allButton = document.querySelectorAll('.lesson-btn')
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

const plusButton = document.querySelectorAll('.plus-icon')
for (const plus of plusButton) {
    plus.addEventListener('click', () => {
        plus.style.display = 'none'
        const parent = plus.closest('.bg-gray-300')

        const minus = parent.querySelector('.minus-icon')
        const paragraph = parent.querySelector('.paragraph')
        minus.style.display = 'block'
        paragraph.style.display = 'block'
    })
}
const minusButton = document.querySelectorAll('.minus-icon')
for (const minus of minusButton) {
    minus.addEventListener('click', () => {
        minus.style.display = 'none'
        const parent = minus.closest('.bg-gray-300')

        const plus = parent.querySelector('.plus-icon')
        const paragraph = parent.querySelector('.paragraph')
        plus.style.display = 'block'
        paragraph.style.display = 'none'
    })
}

// < !--meaning
// :
// "বড়"
// partsOfSpeech
// :
// "adjective"
// points
// :
// 1
// pronunciation
// :
// "বিগ"
// sentence
// :
// "He has a big house."
// synonyms
// :
// (3)['large', 'huge', 'giant']-- >