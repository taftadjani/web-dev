<template>
<nav>
    <h2>Menu</h2>
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
    </ul>
</nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {}
    }
}
</script>

<style>
nav {
    text-align: center;
}

ul {
    padding: 0;
}

li {
    display: inline-block;
    list-style-type: none;
    margin: 0;
}
</style>
