import styles from "../styles/styles";
import { FILTRATION_TYPES, updateFilter } from "../redux/slices/TodosSlice";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";


const FilterTabs = () => {
    const { filter, todos } = useSelector((state) => state.todos);

    const dispatch = useDispatch();
    const handleFilterChange = (filter) => {
        dispatch(updateFilter(filter));
    };

    if (todos.length === 0) return null;//
    return (
        <>
            <View style={styles.dividerLine}></View>

            {/* Category */}
            <View style={styles.filterContainer}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={[
                        styles.filterBtn,
                        filter === FILTRATION_TYPES.ALL && { backgroundColor: "#fa69b4" },
                    ]}
                    onPress={() => handleFilterChange(FILTRATION_TYPES.ALL)}
                >
                    <Text
                        style={[
                            styles.filterText,
                            filter === FILTRATION_TYPES.ALL && { color: "#fafafa" },
                        ]}
                    >
                        All
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={[
                        styles.filterBtn,
                        filter === FILTRATION_TYPES.IN_PROGRESS && { backgroundColor: "#fa69b4" },
                    ]}
                    onPress={() => handleFilterChange(FILTRATION_TYPES.IN_PROGRESS)}
                >
                    <Text
                        style={[
                            styles.filterText,
                            filter === FILTRATION_TYPES.IN_PROGRESS && { color: "#fafafa" },
                        ]}
                    >
                        In Progress
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={[
                        styles.filterBtn,
                        filter === FILTRATION_TYPES.COMPLETED && { backgroundColor: "#fa69b4" },
                    ]}
                    onPress={() => handleFilterChange(FILTRATION_TYPES.COMPLETED)}

                >
                    <Text
                        style={[
                            styles.filterText,
                            filter === FILTRATION_TYPES.COMPLETED && { color: "#fafafa" },
                        ]}
                    >
                        Done
                    </Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.dividerLine}></View> */}
        </>
    )
}

export default FilterTabs