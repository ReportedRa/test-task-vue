<script>
export default {
    data() {
        return {
            isModalShow: false,
            isJson: false,
            someData: [
                { type: 'text', name: 'subname', class: 'input', placeholder: 'Введите вашу фамилию', value: '' },
                { type: 'text', name: 'name', class: 'input', placeholder: 'Введите ваше имя', value: '' },
                { type: 'text', name: 'patronymic', class: 'input', placeholder: 'Введите ваше отчество', value: '' },
                { type: 'text', name: 'pet', class: 'input', placeholder: 'Введите ваше любимое домашнее животное', value: '' },
                { type: 'text', name: 'word', class: 'input', placeholder: 'Введите любое слово', value: '' },
            ],
            newSomeData: []
        }
    },
    methods: {
        showModal() {
            this.isModalShow = true;
        },
        closeModal() {
            this.isModalShow = false;
        },
        makeJson() {
            this.newSomeData = [];
            for (let i = 0; i < this.someData.length; i++) {
                JSON.stringify(this.newSomeData.push({ name: this.someData[i].name, value: this.someData[i].value }));
            };
            this.isJson = true;
        }
    }
}
</script>

<template>
    <div class="start-container">
        <button @click="showModal" class="start-button">Начать</button>
    </div>
    <div v-if="isModalShow" class="modal-container-active" @click.self="closeModal">
        <div class="modal-active">
            <div class="modal-window">
                <div class="modal-title">
                    <p>Форма для заявления</p>
                </div>
                <div class="input-container">
                    <input v-for="(item, index) in someData" :type="item.type" :name="item.name" :class="item.class"
                        :placeholder="item.placeholder" v-model="someData[index].value">
                </div>
                <div class="modal-button">
                    <input type="submit" @click="makeJson" class="modal-send">
                </div>
            </div>
        </div>
    </div>
    <pre v-if="isJson">{{ newSomeData }}</pre>
</template>

<style>
.start-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.start-button {
    text-align: center;
    display: inline-block;
    padding: 15px 40px;
    border: 1px solid #000000;
    cursor: pointer;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden;
    margin: 0 20px;
}

.start-button:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0;
    background: #fc7373;
    left: 0;
    bottom: 0;
    transition: all .3s;
    opacity: 0.3;
}

.start-button:hover:before {
    width: 100%
}

.modal-container {
    display: none;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0px;
    left: 0px;
}

.modal-active {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    width: 100%;
    height: auto;
    border-radius: 15px;
    background-color: rgb(255, 255, 255);
    text-align: center;
    padding: 40px;
    z-index: 2;
}

.modal-container-active {
    display: block;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0px;
    left: 0px;
}

.modal-title {
    margin-bottom: 20px;
    margin-top: -20px;
}

.input {
    display: flex;
    padding: 5px 10px;
    font-family: inherit;
    color: #212529;
    background-color: #fff;
    border: 1px solid #bdbdbd;
    border-radius: 7px;
    flex-basis: 40%;
    margin: 5px 10px;
}

.input-container {
    display: flex;
    flex-flow: row wrap;
}

.modal-send {
    padding: 5px 20px;
    border: 1px solid #000000;
    cursor: pointer;
    margin-top: 10px;
}

@media (max-width: 800px) {
    .input {
        flex-basis: 100%;
    }
}
</style>