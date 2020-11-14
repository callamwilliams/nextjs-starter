import React from 'react';

const HomePage = () => (
    <main data-testid="nextjs-index">
        <section>
            <h1>Homepage</h1>
        </section>
    </main>
);

export async function getServerSideProps(ctx) {
    return {
        props: {},
    };
}

export default HomePage;
