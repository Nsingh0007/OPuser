import React from 'react'

export default function RadioButton({ text }) {
    return (
        <p> <input
            type="checkbox"
            class="rounded-checkbox"
            id="checkbox"
        /> <label for="checkbox">{text}</label></p>
    )
}
