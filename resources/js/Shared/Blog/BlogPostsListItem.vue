<template>
        <div class="postList_item" :data-id="post.id">
            <div class="postList_cat">
                <span>{{ post.category }}</span>
            </div>
            <div class="postList_head">
                <span>{{ post.heading }}</span>
            </div>

            <div class="postList_cover"></div>

            <div class="postList_description">
                <span>{{ post.description }}</span>
            </div>

            <div class="postList_btns">
                <div class="postList_btns_inner">

                    <TextBtn className="yellow_btn" text="Читать далее"/>

                    <div class="postList_btns_actions">
                        <div class="postList_like">
                        <div class="postList_like_icon"></div>
                        <div class="postList_like_val">{{ post.likes }}</div>
                        </div>

                        <div class="postList_dislike">
                        <div class="postList_dislike_icon"></div>
                        <div class="postList_dislike_val">{{ post.dislikes }}</div>
                        </div>

                        <div class="postList_comment">
                        <div class="postList_comment_icon"></div>
                        <div class="postList_comment_val">{{ post.comments }}</div>
                        </div>

                        <div class="postList_share">
                        <div class="postList_share_icon"></div>
                        <div class="postList_share_val">{{ post.shares }}</div>
                        </div>
                    </div>
                </div>

                <div class="postList_posted">
                    <div class="postList_posted_author">
                        <span>Опубликовано администратором</span>
                    </div>
                    <div class="postList_posted_date">
                        {{ post.created_at | formatDate}}
                    </div>
                </div>

            </div>
        </div>
</template>

<script>
    import TextBtn from '@/Shared/Btns/TextBtn'

    export default {
        name: "BlogPostsListItem",
        props: ['post'],
        data: () => ({
            postCover: ''
        }),
        components: {
            TextBtn
        },
        mounted() {
            console.warn('item', this.$props.post);
            this.createPostCover()
        },
        methods: {
            createPostCover() {
                let postCont = this.$props.post.content;
                let html = document.createElement('div')
                    html.innerHTML = postCont;

                let img = html.querySelector('img');
                    this.postCover = img;

                let dest = this.$el.querySelector('.postList_cover');
                    dest.appendChild(img);

                console.warn(postCont, img)
            }
        }
    }
</script>
