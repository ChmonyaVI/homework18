<template>
    <div class="divider">
        <h1 class="divider__title">This is an divider page</h1>
        <div class="divider__container">
            <div v-if="noDividedGifts">Нет назначеных подарков</div>
            <div v-else>
                <v-list lines="two" density="compact" elevation="5" class="mb-5">
                    <v-list-item
                        v-for="item in getDividerListWithNames"
                        :key="item.id"
                        :title="item.friendName + ' - ' + item.giftName"
                        prepend-icon="mdi-view-list"
                    >
                        <template v-slot:append>
                            <v-btn
                                prepend-icon="mdi-delete"
                                density="comfortable"
                                class="mb-2"
                                @click="deleteItem(item.id)"
                            >
                                Удалить
                            </v-btn>
                        </template>
                        <v-divider></v-divider>
                    </v-list-item>
                </v-list>
            </div>
        </div>
        <v-select
            v-model="dividerObj.friendId"
            :items="friendsList"
            label="Друг"
            item-title="name"
            item-value="id"
            variant="solo"
            clearable
        >
        </v-select>
        <v-select
            v-model="dividerObj.giftId"
            :items="giftsList"
            label="Подарок"
            item-title="title"
            item-value="id"
            variant="solo"
            clearable
        >
        </v-select>

        <v-btn block elevation="8" @click="onAdd">Додати</v-btn>
        <p class="text-center font-italic text-red p-3 mt-5">{{ message }}</p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useDividerStore } from '../store/dividerGifts'
import { useFriendsStore } from '../store/friends'
import { useGiftsStore } from '../store/gifts'
export default {
    name: 'DividerView',
    data() {
        return {
            dividerObj: {},
            message: '',
        }
    },
    computed: {
        ...mapState(useDividerStore, ['dividerList', 'getDividerListWithNames']),
        ...mapState(useFriendsStore, ['friendsList']),
        ...mapState(useGiftsStore, ['giftsList']),
        noDividedGifts() {
            return !this.dividerList.length
        },
    },
    methods: {
        ...mapActions(useDividerStore, ['addItem', 'deleteItem']),
        onAdd() {
            if (this.dividerObj.friendId && this.dividerObj.giftId) {
                this.addItem(this.dividerObj)
                this.dividerObj = {}
                this.message = ''
            } else {
                this.message = 'Выберете друга и подарок'
                setTimeout(() => (this.message = ''), 3000)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.divider {
    margin: 0 auto;
    width: 500px;
}
</style>
