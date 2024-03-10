const fs = require('fs')
const events = require(global.widly_db)


const eventService = {
    getAll() {
        return events
    },
    getById(id) {
        return events.find(t => t.id == id)
    },
    create(req, res) {
        let new_id = genRandId(4)

        const event = req.body

        const new_event = {
            id: new_id,
            event: event
        }

        events.push(new_event)

        writeToFile(events)

        return new_event
    },
    update(id, updateData) {
        const eventIndex = events.findIndex(t => t.id == id)

        if (eventIndex === -1) {
            return null
        }

        events[eventIndex].event = { ...events[eventIndex].event, ...updateData }

        writeToFile(events)

        return events[eventIndex]
    },
    delete(id) {
        const index = events.findIndex(u => u.id == id)
        events.splice(index, 1)
        writeToFile(events)
    }
}


// write to file
let writeToFile = async (users) => {
    await
        fs.writeFileSync(
            global.widly_db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}


// generate random id
let genRandId = (count) => {
    let result = ''
    const characters = '0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = eventService