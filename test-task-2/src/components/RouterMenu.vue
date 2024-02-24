<script>
</script>

<template>
    <header class="main-header">
        <nav class="main-nav">
            <ul>
                <li><router-link class="router-link" to="/first">Go To First Page</router-link></li>
                <li><router-link class="router-link" to="/second">Go To Second Page</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style>
.main-header {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.main-nav ul {
    list-style: none;
    display: flex;
}

.main-nav ul li {
    margin-right: 20px;
}

.router-link {

    color: #fff;

    text-decoration: none;

}
</style>