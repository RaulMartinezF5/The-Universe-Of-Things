<script setup></script>

<template>
    <section>
    <button>First</button>
    <button>Prev</button>
    <button>1</button>
    <button>Next</button>
    <button>Last</button>
</section>
</template>

<style scope>
button {
    display: inline-block;
    background-color: #ff9801;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    border: 3px solid #ff9801;
}
button:hover {
    border: 3px solid #ff9801;
    background-color: #fff;
    color: #ff9801;
}

section {
    padding: 50px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
</style>
