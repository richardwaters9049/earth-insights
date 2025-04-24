# ----------------------------------------
# 📄 File: backend/app/utils.py
# ----------------------------------------

import pandas as pd
from typing import List, Dict


def dataframe_from_mock(data: List[Dict]) -> pd.DataFrame:
    """
    Convert a list of dicts to a pandas DataFrame,
    enabling future data-processing or statistical operations.
    """
    df = pd.DataFrame(data)
    # Ensure timestamp column is parsed as datetime
    df["timestamp"] = pd.to_datetime(df["timestamp"])
    return df
