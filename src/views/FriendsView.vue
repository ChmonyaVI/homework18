<template>
    <div class="friend">
        <h1 class="friend__title">This is an friend page</h1>
        <div class="friend__block">
            <v-card class="friend__card mx-auto pa-2" max-width="300">
                <v-list>
                    <v-list-subheader>Список друзей</v-list-subheader>
                    <v-list-item
                        v-for="friend in friendsList"
                        :key="friend.id"
                        :value="friend"
                        color="primary"
                        rounded="shaped"
                        class="friend__item item-list"
                    >
                        <template v-slot:prepend>
                            <div class="item-list__title-name">
                                {{ friend.name }}
                            </div>
                        </template>
                        <v-btn class="friend__btn-delete" @click="deleteFriend(friend.id)"> X </v-btn>
                    </v-list-item>
                </v-list>
            </v-card>
        </div>
        <div class="friend__add-block">
            <v-input class="mx-auto w-75">
                <v-text-field
                    label="Новый друг"
                    v-model="friend.name"
                    max-width="400"
                    hint="Введите имя друга"
                    clearable
                    persistent-clear
                ></v-text-field>
                <template v-slot:append>
                    <v-btn class="mb-3" @click="onAdd(friend)">Добавить</v-btn>
                </template>
            </v-input>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useFriendsStore } from '../store/friends'

export default {
    name: 'FriendsView',
    data() {
        return {
            friend: {},
        }
    },
    computed: {
        ...mapState(useFriendsStore, ['friendsList']),
    },
    methods: {
        ...mapActions(useFriendsStore, ['addFriend', 'deleteFriend']),
        onAdd(friend) {
            this.addFriend(friend)
            this.friend = {}
        },
    },
}
</script>

<style lang="scss" scoped>
.item-list {
    display: flex;
    justify-content: space-between;
}
.friend__btn-delete:hover {
    background-color: rgb(213, 119, 119);
}
</style>
