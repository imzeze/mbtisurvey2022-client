// const Flex = function ({ col, row, align, justify }) {
//     return <div></div>
// };

const Flex = function ({
    children,
    col,
    justify,
    align,
}: {
    children: React.ReactNode | string;
    col?: boolean;
    justify?: string;
    align?: string;
}) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: col ? 'column' : 'row',
                justifyContent: justify,
                alignItems: align,
            }}
        >
            {children}
        </div>
    );
};

export default Flex;
