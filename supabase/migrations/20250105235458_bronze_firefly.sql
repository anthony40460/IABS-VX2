CREATE OR REPLACE FUNCTION deduct_credits(
  p_user_id UUID,
  p_minutes INTEGER
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE credits
  SET available_minutes = available_minutes - p_minutes
  WHERE user_id = p_user_id
  AND available_minutes >= p_minutes;
  
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Crédits insuffisants';
  END IF;
END;
$$;