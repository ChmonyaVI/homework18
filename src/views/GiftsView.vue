<template>
    <div class="gift">
        <h1 class="gift__title">This is an gift page</h1>
        <div class="gift__block">
            <v-card class="gift__card mx-auto pa-2" max-width="300">
                <v-list>
                    <v-list-subheader>Список друзей</v-list-subheader>
                    <v-list-item
                        v-for="gift in giftsList"
                        :key="gift.id"
                        :value="gift"
                        color="primary"
                        rounded="shaped"
                        class="gift__item item-list"
                    >
                        <template v-slot:prepend>
                            <div class="item-list__title-name">
                                {{ gift.title }}
                            </div>
                        </template>
                        <v-btn class="gift__btn-delete" @click="deleteGift(gift.id)"> X </v-btn>
                    </v-list-item>
                </v-list>
            </v-card>
        </div>
        <div class="gift__add-block">
            <v-input class="mx-auto w-75">
                <v-text-field
                    label="Новый друг"
                    v-model="gift.giftTitle"
                    max-width="400"
                    hint="Введите имя друга"
                    clearable
                    persistent-clear
                ></v-text-field>
                <template v-slot:append>
                    <v-btn class="mb-3" @click="onAdd(gift)">Добавить</v-btn>
                </template>
            </v-input>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useGiftsStore } from '../store/gifts'
export default {
    name: 'GiftsView',
    data() {
        return {
            gift: {},
        }
    },
    computed: {
        ...mapState(useGiftsStore, ['giftsList']),
    },
    methods: {
        ...mapActions(useGiftsStore, ['addGift', 'deleteGift']),
        onAdd(gift) {
            this.addGift(gift)
            this.gift = {}
        },
    },
}
</script>

<style lang="scss" scoped>
.item-list {
    display: flex;
    justify-content: space-between;
}
.gift__btn-delete:hover {
    background-color: rgb(213, 119, 119);
}
</style>
